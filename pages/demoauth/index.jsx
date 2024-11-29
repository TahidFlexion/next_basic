// import fs from "fs/promises";
// export default function LoginForm() {
//   const SumbitAction = async (e) => {
//     "use server";
//     console.log(e.get("name"), e.get("add"));
//     fs.writeFile("tahid.txt", "hey i here");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           Welcome
//         </h2>
//         <form onSubmit={SumbitAction}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               name
//             </label>
//             <input
//               type="name"
//               id="name"
//               placeholder="Enter your name"
//               className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="add"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               address
//             </label>
//             <input
//               type="add"
//               id="add"
//               placeholder="Enter your address"
//               className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
