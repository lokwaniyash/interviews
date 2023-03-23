public with sharing class QuoteDataHandler {
    @AuraEnabled(cacheable=true)
    public static QuoteDto getQuote(String recordId) {
      return new QuoteDto([Select Id, EndDate__c, Start_Date__c, Name From Quote__c Where Id = :recordId]);
    }

    @AuraEnabled
    public static void saveQuote(QuoteDto quote){
      Quote__c updQuote = quote.GetQuote();

      update updQuote;
    }
}