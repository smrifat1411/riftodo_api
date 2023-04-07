

const asyncWrapper =(cbFn)=>{


    return async (req,res,next)=>{
       try {
        await cbFn(req,res,next)
       } catch (error) {

        next(error)
       }
    }

}

module.exports = asyncWrapper
