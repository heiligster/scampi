var should = require('chai').should()
    assert = require('assert'),
    scampi = require('../index'),
    escape = scampi.escape,
    unescape = scampi.unescape;


describe('#escape', function ()
{
    it('converts & to &amp;', function ()
    {
        escape('Foo & Bar & Baz').should.equal('Foo &amp; Bar &amp; Baz');
    });

    it('converts && to &amp;&amp;', function ()
    {
        escape('Foo && Bar && Baz').should.equal('Foo &amp;&amp; Bar &amp;&amp; Baz');
    });

    it('converts <span></span> to &lt;span&gt&lt;/span&gt;', function ()
    {
        escape('<span></span>').should.equal('&lt;span&gt;&lt;/span&gt;');
    });

    it('converts single quotes to entities', function ()
    {
        escape("'Single quotes'").should.equal('&#39;Single quotes&#39;');
    });

    it('converts double quotes to entities', function ()
    {
        escape('"Double quotes"').should.equal('&quot;Double quotes&quot;');
    });
});


describe('#unescape', function ()
{
    it('converts &amp; to &', function ()
    {
        unescape('Foo &amp; Bar &amp; Baz').should.equal('Foo & Bar & Baz');
    });

    it('converts &amp;&amp; to &&', function ()
    {
        unescape('&amp;&amp;').should.equal('&&');
    });

    it('converts &lt;span&gt;Foo&lt;/span&gt; to <span>Foo</span>', function ()
    {
        unescape('&lt;span&gt;Foo&lt;/span&gt;').should.equal('<span>Foo</span>');
    });
    it('converts &#39; to \'', function ()
    {
        unescape("&#39;Single quotes&#39;").should.equal("'Single quotes'");
    });

    it('converts &quot; to "', function ()
    {
        unescape('&quot;Double quotes&quot;').should.equal('"Double quotes"');
    });
});
