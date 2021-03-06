require('./helper');


describe("ESI", function(){

	it("should return a promise object", function(){
		var esi = ESI('text');
		expect( esi ).to.have.property( 'then' );
	});

	it("should not affect regular content", function(done){
		var str = 'ok';
		var esi = ESI( str );
		expect(esi).to.eventually.be.eql( 'ok' ).and.notify(done);
	});

	it("should process open and closed tags, i.e. <esi:tag/> and <esi:tag></esi:tag>", function(done){
		var str = '<esi:comment/><esi:comment a/><esi:comment a />ok<esi:comment>removed</esi:other></esi:comment>';
		var esi = ESI( str );
		expect(esi).to.eventually.be.eql( 'ok' ).and.notify(done);

	});

});