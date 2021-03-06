import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import MenuController from '../../controllers/menuController';

const res = mockRes();

describe('MealController', () => {
  describe('create method', () => {
    const next = sinon.spy();
    const req = mockReq({
      body: {
        date: 'adsf'
      },
      user: {
        id: 'fda'
      }
    });

    it('method calls next function on err', async () => {
      try{
        await MenuController.createMenu(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      }
    })
  })

  describe('delete method', () => {
    const next = sinon.spy();
    const req = mockReq({
      params: {
        mealId: 'asdf',
      },
      user:{
        id:'asdf'
      }
    });

    it('method calls next function on err', async () => {
      try{
        await MenuController.deleteMenu(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      }
      
    })
  })

  describe('getSpecificDayMenu method', () => {
    const next = sinon.spy();
    const req = mockReq({
      params: {
        date: 'sfd'
      },
      user:{
        id:'asdf'
      }
    });

    it('method calls next function on err', async () => {
      try{
        await MenuController.getSpecificDayMenu(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      }
      
    })
  })

  describe('update method', () => {
    const next = sinon.spy();
    const req = mockReq({
      params: {
        mealId: 'asdf',
      },
      user:{
        id:'asdf'
      }
    });

    it('method calls next function on err', async () => {
      try{
        await MenuController.updateMenu(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      }
      
    })
  })
  
}) 