import {$host} from './index'

export const vote = async (number)=>{
    const response = await $host.post('api/vote/vote', {number})
    return response
}

export const statistic = async (cratedAt)=>{
    const response = await $host.get('api/vote/statistic', {cratedAt})
    return response 
}

