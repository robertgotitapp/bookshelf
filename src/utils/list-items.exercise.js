import {useQuery, useMutation, queryCache} from 'react-query'
import {client} from 'utils/api-client'

export const useListItems = (user) => {
  const {data: listItems} = useQuery({
    queryKey: 'list-items',
    queryFn: () => client('list-items', {token: user.token}).then(data => data.listItems)
  })

  return listItems ?? []
}

export const useListItem = (user, bookId) => {
  const listItems = useListItems(user)
  return listItems.find(item => item.bookId === bookId) ?? null
}

const defaultOnSettled = {
  onSettled: () => queryCache.invalidateQueries('list-items')
}

export const useUpdateListItem = (user) => useMutation((updates) => client(`list-items/${updates.id}`, {
  data: updates,
  method: 'PUT',
  token: user.token,
}), defaultOnSettled )

export const useRemoveListItem = (user) => useMutation(({id}) => client(`list-items/${id}`, {
  method: 'DELETE',
  token: user.token,
}), defaultOnSettled)

export const useCreateListItem = (user) => useMutation(({bookId}) => client('list-items', {
  data : { bookId },
  token: user.token,
}), defaultOnSettled)