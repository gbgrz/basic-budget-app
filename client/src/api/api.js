import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const api = {

    transactions: {
        get: async (budgetMonth) => {
            const response = await axios.get(`/transactions/${budgetMonth.getFullYear()}-${budgetMonth.getMonth() + 1}-01`);
            
            const data = await response.data;

            const result = {
                income: data.filter(t => t.type === 'inc'),
                expense: data.filter(t => t.type === 'exp')
            }; 
    
            return result;
        },
        create: async (transaction) => {
            const result = await axios.post('/transactions', transaction);
    
            return await result.data;
        },
        delete: async (id) => {
            await axios.delete(`/transactions/${id}`);
        }
        
    }
    
}

export default api;