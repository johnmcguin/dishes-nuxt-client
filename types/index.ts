type TimeStamps = {
  createdAt: string
  updatedAt: string
}

export type User = TimeStamps & {
  username: string
  email: string
}

export type UserProfile = TimeStamps & {
  email: string
  username: string
  id: number
}

export type Dish = TimeStamps & {
  id: number
  averageRating: number
  userRating: number
  description: string
  imgUrl: string
  userBookmarked: boolean
  userFavorited: boolean
  userId: number
}

export type Ingredient = TimeStamps & {
  name: string
  quantity: number
}

export type Step = TimeStamps & {
  stepNumber: number
  instruction: string
}
