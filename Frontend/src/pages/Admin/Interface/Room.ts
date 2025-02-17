import * as yup from "yup";



export interface IRoom {
    id: number,
    name: string,
    quanlity: number,
    password?: string,
}

export const RoomSchame = yup.object().shape({
    password: yup.string().required('Mật khẩu không được để trống'),
})

export const CreateRoomSchame = yup.object().shape({
    password: yup.string().required('Mật khẩu không được để trống'),
    name: yup.string().required('Tên phòng không được để trống'),

})