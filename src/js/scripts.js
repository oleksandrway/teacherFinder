import { Favorites } from '@/js/favoritesList'
import { Statistics } from '@/js/statistics'
import { ViewTopTeachers } from '@/js/mvcTopTeachers/viewTopTeachers.js'
import { CreatingTeacherModal } from '@/js/creatingTeacherModal.js'
import { ControllerTopTeachers } from '@/js/mvcTopTeachers/controllerTopTeachers.js'
import { ModelTopTeachers } from '@/js/mvcTopTeachers/modelTopTeachers.js'
import { handleError } from '@/js/helpers/handleError'
// import { formattedUsers as teachers } from '@/js/data/users-data.js'
import { store } from '@/js/data/store.js'

const creatingTeacherModal = new CreatingTeacherModal()

const viewTopTeachers = new ViewTopTeachers()
const modelTopTeachers = new ModelTopTeachers(store)

const controllerTopTeachers = new ControllerTopTeachers({ view: viewTopTeachers, model: modelTopTeachers, handleError })

const favorites = new Favorites({ store })

const statistics = new Statistics({ store })

// creatingTeacherModal.hooksAddTeacher.on('teacherAdded', ({ teacherInfo }) => {
//   ControllerTopTeachers.addTeacher(teacherInfo)
// })

// console.log(ControllerTopTeachers.ViewTopTeachers.hooksTopTeachers)
// ControllerTopTeachers.ViewTopTeachers.hooksTopTeachers.on('teacherSelected', (teacherInfo) => {
//   console.log('from Scripts file')
// })
