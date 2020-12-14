describe('PetClinic Demo', function(){

    it('Verify User able to see Five menus on homepage',function(){
        browser.get('http://localhost:4200/petclinic/');
        let home = element(by.cssContainingText('.glyphicon glyphicon-home', '30'));
       
        expect(home.getText()).toEqual('Home');
        //expect(element(by.binding('person.email')).getText()).toBe('foo@bar.com');
        browser.sleep(2000);
    });

    /* Scenario: Verify new pet is able to add in Petclinic application
    Given User will navigate to Petclinic url
    Then User should able to click menu MyPets and add button
    And User should able to see textbox of name on that page*/ 
});