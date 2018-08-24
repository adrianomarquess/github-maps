import { call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';
import { Creators as ToastsActions, Types as ToastTypes } from '../ducks/toasts';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UsersActions.addUserFailure('Usuário duplicado'));
      yield put({
        type: ToastTypes.SHOW_TOAST,
        toast: ToastsActions.createToast('Usuário duplicado', ToastTypes.ERROR),
      });
    } else {
      const location = yield select(state => state.modal.location);

      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        location,
      };

      yield delay(500);
      yield put(UsersActions.addUserSuccess(userData));
      yield put(ModalActions.modalClose());
      yield put({
        type: ToastTypes.SHOW_TOAST,
        toast: ToastsActions.createToast('Usuário adicionado com sucesso', ToastTypes.SUCCESS),
      });
    }
  } catch (err) {
    yield put(UsersActions.addUserFailure('Erro ao adicionar usuário'));
    yield put({
      type: ToastTypes.SHOW_TOAST,
      toast: ToastsActions.createToast('Erro ao adicionar usuário', ToastTypes.ERROR),
    });
  }
}
