//require Engineer
const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    describe('Github User', () => {
        it('should return the a string with Github username', () => {
            const githubUser = 'string of information with github username';
            const newEngineer = new Engineer('name', '1', 'url', github);
            expect(newEngineer.getGithubUser()).toEqual(githubUser);
        });
    });
    describe('role',  () => {
        it('would return the Engineers role', () => {
            const role = 'Engineer';
            const newEngineer = new Engineer();
            expect(newEngineer.role).toEqual(role);
        });
    });
});