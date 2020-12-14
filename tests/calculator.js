describe('calculator simple demo', function(){

    it('Addition Test',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        //var input = element(by.model('first'));
        //input.sendKeys('10');
        element(by.model('first')).sendKeys(10);
        element(by.model('second')).sendKeys(20);

        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding', '30'));
        expect(result.getText()).toEqual('30');

        browser.sleep(2000);
    });

   
});