const express = require('express');
const router = express.Router();
const { Op } = require('sequelize')

const Menu = require('../models/menu');
const User = require('../models/user');
const Comment = require('../models/comment')


// 저장
router.post('/comments', async (req, res) => {
    //req.params={id:1}
    //{id:menuId}={id:1}
    //{id}={id:1}
    // const { id: menuId } = req.params

    const { comment, userId, menuId } = req.body // 지현님께 userId 요청

    const result = await Comment.create({
        comment,
        menuId,
        userId,
    })
    // console.log(result)
    const commentId = result.id
    console.log(comment, commentId, menuId, userId)
    res.send({ "ok": true, "message": '작성완료!', result })
    // res.send({ "ok": true, "message": '작성완료!', commentId, comment, menuId, userId })
})


// 불러오기
router.get("/comments", async (req, res, next) => {
    // comments/:menuId
    // comments?menuId=menuId값
    const { menuId } = req.query
    // console.log(menuId)
    const Result = await Comment.findAll({
        where: {
            menuId,
        },
        include: [{
            model: User,
        }]
    })

    // const entries = await Comment.findAll({ 
    //     where: { 
    //         menuId, 
    //     },
    //     // include: [{
    //     //     model: User,
    //     // }],
    //     attributes: ['comment', 'id', ], 
    // })

    // console.log(entries)

    let detailResult = []
    for ( let i = 0; i < Result.length; i++ ) {
        const comment = Result[i].comment
        const commentId = Result[i].id
        const nickname = Result[i].User['nickname']
        detailResult.push( {comment, commentId, nickname} )
    }
    console.log("-------------------------")
    console.log(detailResult)
    console.log(menuId)

    res.send({ "ok": true, result, menuId }) // 모든 값 보냄
    // res.send({ "ok": true, detailResult, menuId }) // 필요한 값만 뽑아 보냄
})

// 
// const entries = await menus.findAll({ where: { userId: currentId }, attributes: ['name', 'description', 'img', 'like', 'userId', 'id', 'category1', 'category2', 'category3'], })
// 공식문서
// https://sequelize.org/master/manual/model-querying-basics.html


// 삭제
router.delete("/comments/:id", async (req, res) => {
    try {
        const { id } = req.params

        await Comment.destroy({
            where: {
                id,
            },
        })
        res.json({ "ok": true, "message": '댓글삭제 성공' })
    } catch (error) {
        console.error(error)
        res.json({ "ok": false, "message": '댓글삭제 실패' })
    }
})


// 수정
router.put("/comments/:id", async (req, res) => {

    try {
        const { id } = req.params;
        let { description, userId } = req.body;
        
        const { userId: commenter } = await Comment.findOne({
            where: { id },
            attributes: ["userId"]
        })
        console.log(commenter)
        // +(숫자형변환) !== 
        if (+userId !== commenter) {
            return res.json({ "ok": false, "message": '작성자가 아닙니다' });
        }
        
        console.log(id, description, userId)
        console.log("아니 왜 업데이트가 안되는데?")
        await Comment.update({
            comment: description,
        }, {
            where: { id }
        });
        res.json({ "ok": true, "message": '댓글수정 성공' });
    } catch (error) {
        console.error(error);
        res.json({ "ok": false, "message": '댓글수정 실패' });
    }
})


module.exports = router;