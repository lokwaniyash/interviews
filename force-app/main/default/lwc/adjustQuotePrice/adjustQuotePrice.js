/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement } from "lwc";

export default class AdjustQuotePrice extends LightningElement {
  adjustedAmountLabel = "Adjusted Amount";
  adjustedAmount = 0;

  amountChanged(event) {
    this.adjustedAmount = event.target.value;
  }

  amountSaved(event) {}
}
