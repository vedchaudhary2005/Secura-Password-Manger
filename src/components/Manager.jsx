import React, { useRef, useState, useEffect } from "react";
import { TbLockPassword } from "react-icons/tb";
import { BiSolidCopy } from "react-icons/bi";
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { IoMdKey } from "react-icons/io";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [editId, setEditId] = useState(null);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  
  useEffect(() => {
    const savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
    setpasswordArray(savedPasswords);
  }, []);

  
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
    });
  };

  const showPassword = () => {
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
    if (ref.current.src.includes("eyecross.png")) {
      ref.current.src = "eyeopen.png";
    } else {
      ref.current.src = "eyecross.png";
    }
  };

  
  const handleInputChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

 
  const savePassword = () => {
    // Prevent empty input
    if (!form.site || !form.username || !form.password) {
      toast("Please fill all the input fields!", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }

    // If editing existing pasworduh
    if (editId) {
      const updatedArray = passwordArray.map((item) =>
        item.id === editId ? { ...form, id: editId } : item
      );
      setpasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
      setform({ site: "", username: "", password: "" });
      setEditId(null);
      toast("Password Updated Successfully!", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }

    // Else add a new password
    const newEntry = { ...form, id: uuidv4() };
    const updatedArray = [...passwordArray, newEntry];

    setpasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    setform({ site: "", username: "", password: "" });
    toast("Password Saved Successfully!", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
    });

    console.log("Password saved:", newEntry);
  };

 
  const deletePassword = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this password?");
    if (!confirmDelete) return;

    const updatedArray = passwordArray.filter((item) => item.id !== id);
    setpasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));

    toast("Password Deleted!", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
    });
  };

  
  const handleEdit = (item) => {
    setform({
      site: item.site,
      username: item.username,
      password: item.password,
    });
    setEditId(item.id);
    toast("Edit mode enabled!", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-cyan-950 text-white px-4 sm:px-6 py-8">
        <div className="w-full max-w-7xl p-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl text-white text-center">
            <span className="font-bold">&lt;</span>Secura
            <span className="font-bold">/&gt;</span>
          </h1>

          <p className="text-white-500 text-center text-sm sm:text-base md:text-lg mb-6">
            Your Own Password Manager
          </p>

          <div className="text-black flex flex-col p-4 gap-6 sm:gap-8 items-center">
            <input
              name="site"
              value={form.site}
              onChange={handleInputChange}
              className="rounded-full border border-green-500 w-full p-2 px-4 text-sm sm:text-base"
              placeholder="Enter website URL"
              type="text"
            />

            <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-8">
              <input
                name="username"
                value={form.username}
                onChange={handleInputChange}
                className="rounded-full border border-green-500 w-full p-2 px-4 text-sm sm:text-base"
                placeholder="Enter Username"
                type="text"
              />

              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  className="rounded-full border border-green-500 w-full p-2 px-4 pr-10 text-sm sm:text-base"
                  placeholder="Enter Password"
                  type="password"
                />
                <span
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={showPassword}
                >
                  <img
                    ref={ref}
                    className="p-1"
                    width={30}
                    src="eyeopen.png"
                    alt="toggle visibility"
                  />
                </span>
              </div>
            </div>

            <button
              onClick={savePassword}
              className="flex justify-center items-center bg-green-300 rounded-full px-6 sm:px-8 gap-2 border border-green-800 py-2 w-full sm:w-fit hover:bg-green-500 text-black text-sm sm:text-base"
            >
              <TbLockPassword />
              {editId ? "Update Password" : "Save Password"}
            </button>
          </div>

          <div className="passwords mt-4">
            <h2 className="font-bold text-lg sm:text-xl py-4">Your Passwords</h2>
            {passwordArray.length === 0 && <div className="text-sm sm:text-base">No Passwords To Show</div>}

            {passwordArray.length !== 0 && (
              <div className="overflow-x-auto">
                <table className="table-auto w-full bg-green-800 rounded-md overflow-hidden min-w-[600px]">
                  <thead className="bg-green-800 text-white">
                    <tr>
                      <th className="py-2 px-2 text-xs sm:text-sm md:text-base">Website Url</th>
                      <th className="py-2 px-2 text-xs sm:text-sm md:text-base">Username</th>
                      <th className="py-2 px-2 text-xs sm:text-sm md:text-base">PassWord</th>
                      <th className="py-2 px-2 text-xs sm:text-sm md:text-base">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="bg-green-50 text-black">
                    {passwordArray.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 px-2 border border-white text-center">
                          <div
                            className="lordiconcopy flex items-center justify-center space-x-2 cursor-pointer"
                            onClick={() => copyText(item.site)}
                          >
                            <span className="truncate max-w-[80px] sm:max-w-[150px] md:max-w-[200px] text-xs sm:text-sm md:text-base">{item.site}</span>
                            <BiSolidCopy className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5 hover:text-white flex-shrink-0" />
                          </div>
                        </td>

                        <td className="py-2 px-2 border border-white text-center">
                          <div
                            className="lordiconcopy flex items-center justify-center space-x-2 cursor-pointer"
                            onClick={() => copyText(item.username)}
                          >
                            <span className="truncate max-w-[80px] sm:max-w-[150px] md:max-w-[200px] text-xs sm:text-sm md:text-base">{item.username}</span>
                            <BiSolidCopy className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5 hover:text-white flex-shrink-0" />
                          </div>
                        </td>

                        <td className="py-2 px-2 border border-white text-center">
                          <div
                            className="lordiconcopy flex items-center justify-center space-x-2 cursor-pointer"
                            onClick={() => copyText(item.password)}
                          >
                            <span className="truncate max-w-[80px] sm:max-w-[150px] md:max-w-[200px] text-xs sm:text-sm md:text-base">{item.password}</span>
                            <BiSolidCopy className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5 hover:text-white flex-shrink-0" />
                          </div>
                        </td>

                        <td className="py-2 px-2 border border-white text-center">
                          <div className="lordiconcopy flex items-center justify-center gap-3 sm:gap-4">
                            <MdAutoDelete
                              className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5 hover:text-white"
                              onClick={() => deletePassword(item.id)}
                            />
                            <FaEdit
                              className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5 hover:text-white"
                              onClick={() => handleEdit(item)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;