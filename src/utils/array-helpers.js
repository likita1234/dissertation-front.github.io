import { AssessmentFormType, LanguageType, QuestionType } from '@/constants'

export const getAssessmentFormType = () => [
  { id: 1, name: 'Private', value: AssessmentFormType.PRIVATE },
  { id: 2, name: 'Public', value: AssessmentFormType.PUBLIC }
]

export const getLanguages = () => [
  { name: 'English', value: LanguageType.ENGLISH },
  { name: 'Nepali', value: LanguageType.NEPALI }
]

export const getQuestionType = () => [
  { id: 1, name: 'Text', value: QuestionType.TEXT },
  { id: 2, name: 'LongText', value: QuestionType.LONGTEXT },
  { id: 3, name: 'Number', value: QuestionType.NUMBER },
  { id: 4, name: 'Radiobutton', value: QuestionType.RADIO },
  { id: 5, name: 'Checkbox', value: QuestionType.CHECKBOX },
  { id: 6, name: 'Ratings', value: QuestionType.RATINGS }
  // { id: 6, name: 'Dropdown', value: QuestionType.DROPDOWN },
]
