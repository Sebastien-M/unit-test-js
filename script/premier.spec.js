it('should be true', ()=>{
    expect(true).toBe(true);
});

describe("function addition",()=>{
    it("should add 2 + 2", ()=>{
        let resultat = addition(2,2);
        expect(resultat).toBe(4);
    });

    it("should add -2 + -7", ()=>{
        let resultat = addition(-2,-7);
        expect(resultat).toBe(-9);
    });

    // it("should add bloup + 4", ()=>{
    //     let resultat = addition("bloup", 4);
    //     expect(resultat).toBe("bloup4");
    // });

    //null = this
    it("should  throw error with string parameters", ()=>{
        expect(addition.bind(null, "bloup",2)).toThrow(new Error("Expect int as parameter"));
    });

});



describe("function increment",()=>{
    let compte = new Compteur();
    it("should add 1 to compteur", ()=>{
        compte.incrementer();
        expect(compte.compte).toBe(1);
    });

    it("should add 1 to compteur", ()=>{
        compte.incrementer();
        expect(compte.compte).toBe(2);
    });

    it("should remove 1 to compteur", ()=>{
        compte.decrementer();
        expect(compte.compte).toBe(1);
    });

    it("should reset compteur to 0", ()=>{
        compte.reset();
        expect(compte.compte).toBe(0);
    });

    //null = this
    // it("should  throw error with string parameters", ()=>{
    //     expect(addition.bind(null, "bloup",2)).toThrow(new Error("Expect int as parameter"));
    // });

});

