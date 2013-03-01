require ( ['module'] , function ( moduleCode ) {

	describe("module", function () {

		describe("Given module is required", function () {

			it("Should be defined", function () {
				
				expect(moduleCode).toBeDefined();

			});

		});

	});

});
