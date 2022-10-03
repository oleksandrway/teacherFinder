import { View } from '@/js/mvc/view.js'
import { Controller } from '@/js/mvc/controller.js'
import { Model } from '@/js/mvc/model.js'
import { handleError } from '@/js/helpers/handleError'

import { users as teachers } from '@/js/data/users-data.js'

const view = new View({ teachersContainer: '.top-teachers', teachersListSelector: '#top-teachers-list', filtersInputselectors: ['#age-range', '#region', '#sex', '#with-photo', '#favorites'] })
const model = new Model(teachers)

const controller = new Controller({ view, model, handleError })
