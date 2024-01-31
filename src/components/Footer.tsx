import React from "react";

const Footer: React.FC = () => {
  return (
<footer className="bg-blue-600 text-white py-12">

    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div></div>
        <div>
            <h3 className="text-2xl font-bold mb-2">Coding-School-Blog</h3>
            <ul className="space-y-2">
                <li>
                    <div>Siemenstraße 20</div>
                    <div>9020 Klagenfurt am Wörthersee</div>
                    <div>0676 8432 23249</div>
                </li>
                
            </ul>
        </div>
        <div>
            <h3 className="text-lg font-bold mb-2 pt-5">Lass uns Freunde bleiben</h3>
            <ul className="space-y-2">
                <li><a href="" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="" className="text-gray-300 hover:text-white">IN</a></li>
            </ul>   
        </div>
    </div>
    <div className="bg-blue-600 p-4 text-white text-center mt-16">@2024 / Coding-School am Wörthersee</div>

</footer>
  );
};

export default Footer;