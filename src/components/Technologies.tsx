import { use, useState } from "react";

const Technologies = ({ technologiPromise }) => {

    console.log(technologiPromise);

    const Technologie = use(technologiPromise);

    console.log(Technologies,"tech")
    return (
        <div>

        </div>
    );
};

export default Technologies;