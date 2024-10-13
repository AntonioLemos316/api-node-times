import Time from "./timeModel.js";

const findAll = async () => {
    try {
        const result = await Time.find({})
        return result
    } catch (error) {
        console.log(error)
        throw new Error({message: error});
    }
}

const findById = async (id) => {
    try {
        const result = await Time.findById(id)
        return result
    } catch (error) {
        console.log(error)
        throw new Error({message: error});       
    }
}

const create = async (newTime) => {
    try {
        const result = await Time.create(newTime)
        return result
    } catch (error) {
        console.log(error)
        throw new Error({message: error});
    }
}

const update = async (id, updateTime) => {
    try {
        const result = await Time.findByIdAndUpdate(id, updateTime)
        return result 
    } catch (error) {
        console.log(error)
        throw new Error({message: error});
    }
}

const findAndDelete = async (id) => {
    try {
        const result = await Time.findByIdAndDelete(id)
        return result
    } catch (error) {
        console.log(error)
        throw new Error({message: error});
    }
}

export default {create, findAll, findById, update, findAndDelete}

