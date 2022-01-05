import React from "react";

const NewHeader = () => {
    return (
        <header className="w-1/2">
            <div className="w-full flex justify-center items-center gap-4">
                <div>
                    <span>babyazalea's home</span>
                </div>
                <div>
                    <ul  className="flex justify-start items-center gap-2">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export  default  NewHeader;