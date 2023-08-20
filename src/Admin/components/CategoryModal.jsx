import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { storage } from "../utils/FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loader from "./Loader";

function CategoryModal() {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const [CategoryImage, setCategoryImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setCategoryImage(imageFile);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!CategoryName || !CategoryImage) {
      console.error("Category name and image are required.");
      return;
    }

    setIsLoading(true); // Set loading to true before starting the upload

    const storageRef = ref(storage, `images/${CategoryImage.name}`);
    uploadBytes(storageRef, CategoryImage)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            const payload = { CategoryName, CategoryImage: url };
            console.log(payload);
          })
          .catch((error) => alert(error.message))
          .finally(() => {
            setIsLoading(false); // Set loading to false after the upload is complete
          });
      })
      .catch((error) => {
        alert(error.message);
        setIsLoading(false); // Set loading to false if there's an error
      });
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Category
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? ( // Display loading indicator if isLoading is true
            <div>
              <Loader />
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="CategoryName" className="form-label">
                  Category Name
                </label>
                <input
                  value={CategoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="CategoryName"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Category Image
                </label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                  className="form-control"
                  id="formFile"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryModal;
