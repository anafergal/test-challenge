const dna = require ('../dna');

test ('Remove non-canonical bases', () => {
    expect(dna('CTAGGGTAacCG')).toMatch('CTAGGGTACG');
});

