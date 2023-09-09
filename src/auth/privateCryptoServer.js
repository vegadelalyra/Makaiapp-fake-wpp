import { encoder, decoder } from './privateEndPoints'
import axios from 'axios'

// Encode numbers to letters
export async function encode(phoneNumber) {
    if (!phoneNumber) return

    try {
        const response = await axios.get(encoder + phoneNumber)
        return response.data.encodedLetters
    } catch (error) {
        console.error('Error encoding:', error.message)
    }
}

// Decode letters to numbers
export async function decode(doodle) {
    if (!doodle) return

    try {
        const response = await axios.get(decoder + doodle, {
            headers,
            validateStatus: () => true,
        })
        return response.data.decodedNumbers
    } catch (error) {
        return null
    }
}