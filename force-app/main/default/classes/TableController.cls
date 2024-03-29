public with sharing class TableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Id,Name,AnnualRevenue,Industry,Phone
            FROM Account
        ];
    }
}