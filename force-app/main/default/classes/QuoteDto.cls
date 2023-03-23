public with sharing class QuoteDto extends BaseDto {
  @AuraEnabled
  public Date startDate { get; set; }
  @AuraEnabled
  public Date endDate { get; set; }
  @AuraEnabled
  public String name { get; set; }
  
  
  public QuoteDto() {
  }

  public QuoteDto(Quote__c quote) {
    super(quote);
    this.endDate = quote.EndDate__c;
    this.startDate = quote.Start_Date__c;
    this.name = quote.Name;
  }

  public Quote__c GetQuote() {
    Quote__c quote = new Quote__c();
    quote.id = super.id;
    quote.Start_Date__c = this.startDate;
    quote.EndDate__c = this.endDate;

    return quote;
  }

  public override SObject refreshSo() {
    return null;
  }
}
