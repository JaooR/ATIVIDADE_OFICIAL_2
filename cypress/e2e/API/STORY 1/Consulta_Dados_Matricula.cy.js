

describe("Consultando dados de uma Mátricula", () => {

    it("Deve realizar realizar a consulta de dados de uma matricula, e deve retornar todos os dados dessa matricula",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/4653421',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
  
        })

    });

});
