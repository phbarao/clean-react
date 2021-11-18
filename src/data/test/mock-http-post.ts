
import { internet, random } from 'faker'

import { HttpPostParams } from '../protocols/http'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: internet.url(),
  body: random.objectElement()
})
