

const footer = () => {
  return (
   <footer className=" bg-black text-gray-400 py-12">
   <div className=" max-w-7xl mx-auto grid grid-cols-1
   sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8 ">
        <div className="cursor-pointer">
            <h1 className=" font-semibold text-lg">About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum perferendis voluptate </p>
        </div>
        <div className="cursor-pointer">
            <h1 className=" font-semibold text-lg">Quick Links</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Course</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="cursor-pointer">
            <h1 className=" font-semibold text-lg">Follow Us</h1>
            <p>Facebook</p>
            <p>Twitter</p>
        </div>
        <div className="cursor-pointer">
            <h1 className=" font-semibold text-lg">Contact Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, maxime.</p>
        </div>
   </div>
   <p className=" text-center text-xs pt-8">@ 2024 Music School. All rights reserved</p>
   </footer>
  )
}

export default footer
