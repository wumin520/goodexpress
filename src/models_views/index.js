import Person from './person'

export const initModelsViews = (app, conf) => {
  new Person(app, conf)
}
