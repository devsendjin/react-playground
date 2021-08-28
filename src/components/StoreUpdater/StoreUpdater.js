import {useDispatch, useSelector} from "react-redux";
import {updateListItemAsyncAction} from "../../store/Global/actions";
import 'bulma/bulma.sass';

export const StoreUpdater = () => {
  const list = useSelector(store => store.global.list);
  const dispatch = useDispatch();

  const onUpdate = (item) => {
     dispatch(updateListItemAsyncAction(item, 2000))
  }

  return (
    <div className="store-updater container">
      <h1 className="title has-text-centered">StoreUpdater</h1>
      {list.length > 0 && (
        <div className="list columns is-multiline is-flex-wrap-wrap mt-6">
          {list.map(item => (
            <div className="card column is-4 m-0 has-text-centered" key={item.value}>
              <div className="content">{item.value}</div>
              <div style={{height: '25px'}}>{item.isLoading && 'Updating...'}</div>
              <footer className="card-footer">
                <button className="button card-footer-item" onClick={() => onUpdate(item)}>Update</button>
              </footer>
            </div>
          ))}
        </div>
      )}
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};
