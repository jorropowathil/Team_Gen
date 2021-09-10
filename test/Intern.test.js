//Require Intern  
const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('school', () => {
        it(' should return string containing school information', () => {
            const school = 'UIC';
            const newSchool = new Intern('name', 1, 'email', school);
            expect(newSchool.getSchool()).toBe(school);
        });
    });
    describe('Role',  () => {
        it('the role of the intern should be returned', () => {
            const role = 'Intern';
            const newIntern = new Intern();
            expect(newIntern.getRole()).toEqual(role);
        });
    });
});