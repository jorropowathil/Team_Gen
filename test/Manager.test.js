//require Manager 
const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('officeNumber', () => {
        it('the officeNumber assigned to the manager should be returned', () => {
            const officeNumber = '101';
            const newManager = new Manager('name', '1', 'email', offNum);
            expect(newManager.getOfficeNumber()).toEqual(officeNumber);
        });
    });
    describe('getRole', () => {
        it('the role of the manager should be returned', () => {
            const role = 'Manager';
            const managerResult = new Manager();
            expect(managerResult.role).toEqual(role);
        });
    });
});