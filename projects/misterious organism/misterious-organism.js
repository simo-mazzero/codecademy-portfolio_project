// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAequorFactory = (num, arr) => {
    return {
        specimenNum: num,
        dna: arr,
        mutate() {
            let r = Math.floor(Math.random() * 15);
            let rBase = returnRandBase();
            if (this.dna[r] === rBase) {
                rBase = returnRandBase();
            } else {
                this.dna[r] = rBase;
            }
            return this;
        },
        compareDna(pAequor) {
            let matchingBase = 0;
            for (let i = 0; i < pAequor.dna.length; i++) {
                if (pAequor.dna[i] === this.dna[i]) {
                    matchingBase++;
                }
            }
            console.log(matchingBase);
            let match = (matchingBase / this.dna.length) * 100;
            return (
                "Specimen " +
                this.specimenNum +
                " and specimen " +
                pAequor.specimenNum +
                " have " +
                match.toFixed(2) +
                "% DNA in common"
            );
        },
        willLikelySurvive() {
            let cgBases = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === "C" || this.dna[i] === "G") {
                    cgBases++;
                }
            }
            let surviveChance = ((cgBases / this.dna.length) * 100).toFixed(2);
            return surviveChance >= 60 ? true : false;
        },
        complementStrand() {
            let complementStrand = [];
            for (let i = 0; i < this.dna.length; i++) {
                switch (this.dna[i]) {
                    case "A":
                        complementStrand[i] = "T";
                        break;
                    case "T":
                        complementStrand[i] = "A";
                        break;
                    case "C":
                        complementStrand[i] = "G";
                        break;
                    case "G":
                        complementStrand[i] = "C";
                        break;
                }
            }
            return complementStrand;
        },
    };
};

/*
let spec1 = pAequorFactory(1, mockUpStrand());
let spec2 = pAequorFactory(2, mockUpStrand());

console.log(spec1);
console.log(spec2);
console.log(spec1.willLikelySurvive());

let testingPool = [];
for (let i = 1; i < 31; i++) {
  testingPool.push(pAequorFactory(i, mockUpStrand()));
}

console.log(spec1.complementStrand());
*/