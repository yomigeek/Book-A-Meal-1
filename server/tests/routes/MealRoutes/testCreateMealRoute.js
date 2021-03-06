import {
    chai,
    App,
    token
} from '../../setup'

describe('POST /api/v1/meals', function() {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/meals')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    price: 500,
                    img: 'image_link',
                });

            res.should.have.status(201);
        } catch (err) {
            console.log(err.stack);
        }
    });

    it('should return an if a user tries creating a meal twice', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/meals')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    price: 500,
                    img: 'image_link',
                });

            res.should.have.status(409);
            res.body.should.be.deep.equal({
                status: false,
                message: "Meal already exists"
            })
        } catch (err) {
            console.log(err.stack);
        }
    });


    it('malformed request should return error 400', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/meals')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    title: 'test meal',
                });

            res.should.have.status(400);
        } catch (err) {
            console.log(err.stack);
        }
    });
});