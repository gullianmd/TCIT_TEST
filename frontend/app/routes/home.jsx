import { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import CustomCard from "../components/Post/Post";
import Modal from "../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, createPost, deletePost } from "../store/postSlice";

export function meta() {
  return [
    { title: "Gullian Mardones" },
    { name: "description", content: "Bienvenido!" },
  ];
}

export default function Home() {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (status === "reload") dispatch(fetchPosts());
  }, [status]);

  const [modalActive, setModalActive] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const handleModal = () => {
    setModalActive(!modalActive);
  };

  const handlePostDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handlePostCreation = (name, desc) => {
    dispatch(
      createPost({
        nombre: name,
        descripcion: desc,
      })
    );
  };

  const handleFilter = (searchValue) => {
    const lowerCaseSearchValue = searchValue.toLocaleLowerCase();

    const hasFilter = typeof searchValue === "string" && searchValue.length > 0;

    const filtered = !hasFilter
      ? items
      : items.filter(
          (e) =>
            String(e.id).toLocaleLowerCase().includes(lowerCaseSearchValue) ||
            String(e.nombre)
              .toLocaleLowerCase()
              .includes(lowerCaseSearchValue) ||
            String(e.descripcion)
              .toLocaleLowerCase()
              .includes(lowerCaseSearchValue)
        );

    return filtered.map((post) => (
      <CustomCard
        handleDelete={handlePostDelete}
        description={post.descripcion}
        name={post.nombre}
        id={post.id}
      />
    ));
  };

  return (
    <div className="w-full">
      <Modal
        isOpen={modalActive}
        handleClose={handleModal}
        createPostHandler={handlePostCreation}
      />
      <div className="w-11/12 flex flex-col gap-2 justify-center items-center">
        <HeaderBar
          modalHandler={handleModal}
          value={filterValue}
          setValue={setFilterValue}
        />
        <div className="flex flex-row gap-2 justify-center">
          {items && handleFilter(filterValue)}
        </div>
      </div>
    </div>
  );
}
