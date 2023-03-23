import { LightningElement, api, track, wire } from "lwc";
import getQuote from "@salesforce/apex/QuoteDataHandler.getQuote";
import saveQuote from "@salesforce/apex/QuoteDataHandler.saveQuote";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class EditQuote extends LightningElement {
  @api recordId;
  quoteData = {
    name: "Quote Name",
    startDate: 1547250828000,
    endDate: 1547250828000
  };

  renderedCallback() {}

  connectedCallback() {
    getQuote({ recordId: this.recordId })
      .then((data) => {
        console.log(data);
        this.quoteData = JSON.parse(JSON.stringify(data));
      })
      .catch((err) => {
        throw err;
      });
  }

  startDateChanged(event) {
    this.quoteData.startDate = event.target.value;
  }

  endDateChanged(event) {
    this.quoteData.endDate = event.target.value;
  }

  saveQuote(event) {
    console.log(JSON.stringify(this.quoteData));
    saveQuote({ quote: this.quoteData })
      .then(() => {
        const evt = new ShowToastEvent({
          title: "SUCCESS",
          message: "Record has been updated",
          variant: "success"
        });
        this.dispatchEvent(evt);
      })
      .catch((err) => {
        throw err;
      });
  }
}
