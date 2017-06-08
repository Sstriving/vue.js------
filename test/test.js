/**
 * Created by 81964 on 2017/6/6.
 */
var expect = chai.expect;

describe('页码显示测试', function() {
    it('当前页为1时,页码显示的数组应该为[1,2,3,4,5,6,0,12]', function() {
        expect(indexs()).to.be.equal([1,2,3,4,5,6,0,12]);
    });

});