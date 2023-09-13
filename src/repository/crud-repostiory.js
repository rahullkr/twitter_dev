class CrudRepository{
    constructor(model){
        this.model = model; 
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result ; 
        } catch (error) {
            console.log('something went wrong')
        }
    }
    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id); 
            return result;

        } catch (error) {
            console.log('something went wrong')
        }
    }
    async get(id){
        try {
            const result = await this.model.findById(id); 
            return result;

        } catch (error) {
            console.log('something went wrong')
        }
    }
    async getAll(){
        try {
            const result = await this.model.find({}); 
            return result;

        } catch (error) {
            console.log('something went wrong')
        }
    }
    async update(id, data){
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true}); 
            return result;

        } catch (error) {
            console.log('something went wrong');
            
        }
    }
}

export default CrudRepository; 