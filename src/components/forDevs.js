import React from "react"

import {GoChevronRight} from "react-icons/go";

export default function forDevs() {
    return (
    <div className=" mt-1 mx-auto">
        <div className="">

            <p className= "text-black text-4xl md:text-4xl font-semibold">
               Topics
            </p>

            {/* NOTIFICATIONS */}
            <div className = "flex mt-4 ">
            <p className= "text-base text-md md:text-xl text-left font-bold text-gray-700 leading-relaxed ">
                Notifications: 
            </p>

            <p className= "text-base text-md md:text-xl text-left text-gray-700 leading-relaxed pl-2">
                 Integrate a local notification with UNNotification Center.
            </p>
            <a href="https://github.com/TruongTommy99/SwiftUI-LocalNotifications" target="_blank" rel="noreferrer noopener"
            className = "py-2  text-blue-800">
                    <GoChevronRight/>
                     </a>
            </div>

            {/* MapKit */}
            <div className = "flex mt-1 ">
            <p className= "text-base text-md md:text-xl text-left font-bold text-gray-700 leading-relaxed ">
                Maps:
            </p>
            <p className= "text-base text-md md:text-xl text-left text-gray-700 leading-relaxed pl-2">
                Set a fixed maps and use coordinates with MapKit.
            </p>
            <a href="https://github.com/TruongTommy99/SwiftUI-CoreML-Example" target="_blank" rel="noreferrer noopener"
            className = "py-2  text-blue-800">
                    <GoChevronRight/>
                     </a>
            </div>

            {/* ML */}
            <div className = "flex mt-1 ">
            <p className= "text-base text-md md:text-xl text-left font-bold text-gray-700 leading-relaxed ">
                Machine Learning:
            </p>
            <p className= "text-base text-md md:text-xl text-left text-gray-700 leading-relaxed pl-2">
                Parse a CSV file containing sample data and use the CoreML Kit to perform a tabular regression.
            </p>
            <a href="https://github.com/TruongTommy99/SwiftUI-CoreML-Example" target="_blank" rel="noreferrer noopener"
            className = "py-2  text-blue-800">
                    <GoChevronRight/>
                     </a>
            </div>
            

           
            


        </div>
    </div>

    )
}