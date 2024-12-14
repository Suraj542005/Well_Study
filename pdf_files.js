// script.js


var notes_dict = {
    // Notes Pdf's
    'n1' : "notes_file/Alcohols, Phenols, and Ethers Shobhit Nirwan.pdf",
    'n2' : "notes_file/Aldehydes, Ketones, and Carboxylic Acids Shobhit Nirwan.pdf",
    'n3' : "notes_file/Alkyl Halide Conversions Shobhit Nirwan.pdf",
    'n4' : "notes_file/Amines Shobhit Nirwan.pdf",
    'n5' : "notes_file/Class 12 Physics Derivations Shobhit Nirwan.pdf",
    'n6' : "notes_file/Distinction Tests 12th Shobhit Nirwan.pdf",
    'n7' : "notes_file/Haloalkanes and Haloarenes Shobhit Nirwan.pdf",
    'n8' : "notes_file/Imp Common Names Shobhit Nirwan.pdf",
    'n9' : "notes_file/organic name reactions Shobhit Nirwan.pdf",

    // Boards Pdf's

    //CBSE
    'b1' : "Boards_file/Class-12(Physics) Chapterwise PYQs Shobhit Nirwan.pdf",
    'b2' : "Boards_file/Class-12(Physics) Derivations Shobhit Nirwan.pdf",
    'b3' : "Boards_file/Class-12(Chemistry) PYQs Shobhit Nirwan.pdf",
    'b4' : "Boards_file/Class-12th(Maths) Chapterwise PYQs Shobhit Nirwan.pdf",
    'b5' : "Boards_file/Maths-Official SQP by CBSE(2023-2024).pdf",
    'b6' : "Boards_file/Maths-Official SQP-Answer by CBSE(2023-2024).pdf",
    'b7' : "Boards_file/Physics-Official SQP by CBSE(2023-2024).pdf",
    'b8' : "Boards_file/Physics-Official SQP-Answer by CBSE(2023-2024).pdf",
    'b9' : "Boards_file/EnglishCore-Official SQP by CBSE(2023-2024).pdf",
    'b10' : "Boards_file/EnglishCore-Official SQP-Answer by CBSE(2023-2024).pdf",
    'b11' : "Boards_file/ComupterScience-Official SQP by CBSE(2023-2024).pdf",
    'b12' : "Boards_file/ComupterScience-Official SQP-Answer by CBSE(2023-2024).pdf",
    'b13' : "Boards_file/Chemistry-Official SQP by CBSE(2023-2024).pdf",
    'b14' : "Boards_file/Chemistry-Official SQP-Answer by CBSE(2023-2024).pdf",


    //GSEB

    //Chemistry
    //2023
    'g_chem1' : "Boards_file/GSEB_Boards(class-12)/Gseb_2023/12th Chemistry 2023 (March).pdf",
    //2022
    'g_chem2' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Chemistry 2022 (March).pdf",
    'g_chem3' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Chemistry 2022 (March-Answers).pdf",
    'g_chem4' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Chemistry 2022 (July).pdf",
    'g_chem5' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Chemistry 2022 (July-Answers).pdf",
    //2021
    'g_chem6' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th Chemistry 2021 (July).pdf",
    'g_chem7' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th Chemistry 2021 (July-Answers).pdf",
    //2020
    'g_chem8' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Chemistry 2020 (March).pdf",
    'g_chem9' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Chemistry 2020 (March-Answers).pdf",
    'g_chem10' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Chemistry 2020 (August).pdf",
    'g_chem11' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Chemistry 2020 (August-Answers).pdf",
    //2019
    'g_chem12' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Chemistry 2019 (March).pdf",
    'g_chem13' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Chemistry 2019 (March-Answers).pdf",
    'g_chem14' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Chemistry 2019 (July).pdf",
    'g_chem15' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Chemistry 2019 (July-Answers).pdf",
    //2018
    'g_chem16' : "Boards_file/GSEB_Boards(class-12)/Gseb_2018/12th Chemistry 2018 (March).pdf",
    'g_chem17' : "Boards_file/GSEB_Boards(class-12)/Gseb_2018/12th Chemistry 2018 (July).pdf",


    //Physics
    //2023
    'g_phy1' : "Boards_file/GSEB_Boards(class-12)/Gseb_2023/12th Physics 2023 (March).pdf",
    //2022
    'g_phy2' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Physics 2022 (March).pdf",
    'g_phy3' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Physics 2022 (March-Answers).pdf",
    'g_phy4' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Physics 2022 (July).pdf",
    //2021
    'g_phy5' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th Physics 2021 (May).pdf",
    'g_phy6' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th Physics 2021 (July).pdf",
    //2020
    'g_phy7' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Physics 2020 (March).pdf",
    'g_phy8' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Physics 2020 (March-Answers).pdf",
    'g_phy9' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Physics 2020 (August).pdf",
    'g_phy10' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Physics 2020 (August-Answers).pdf",
    //2019
    'g_phy11' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Physics 2019 (March).pdf",
    'g_phy12' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Physics 2019 (March-Answers).pdf",
    //2018
    'g_phy13' : "Boards_file/GSEB_Boards(class-12)/Gseb_2018/12th Physics 2018 (March).pdf",
    'g_phy14' : "Boards_file/GSEB_Boards(class-12)/Gseb_2018/12th Physics 2018 (July).pdf",


    //Maths
    //2023
    'g_math1' : "Boards_file/GSEB_Boards(class-12)/Gseb_2023/12th Maths 2023 (March).pdf",
    //2022
    'g_math2' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Maths 2022 (March).pdf",
    'g_math3' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Maths 2022 (March-Answers).pdf",
    'g_math4' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Maths 2022 (July).pdf",
    'g_math5' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Maths 2022 (July-Answers).pdf",
    //2021
    'g_math6' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th Maths 2021 (July).pdf",
    'g_math7' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th Maths 2021 (July-Answers).pdf",
    //2020
    'g_math8' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Maths 2020 (March).pdf",
    'g_math9' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Maths 2020 (March-Answers).pdf",
    'g_math10' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Maths 2020 (August).pdf",
    //2019
    'g_math11' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Maths 2019 (March).pdf",
    'g_math12' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Maths 2019 (March-Answers).pdf",
    //2018
    'g_math13' : "Boards_file/GSEB_Boards(class-12)/Gseb_2018/12th Maths 2018 (March).pdf",
    'g_math14' : "Boards_file/GSEB_Boards(class-12)/Gseb_2018/12th Maths 2018 (July).pdf",


    //Computer Science
    //2023
    'g_comp1' : "Boards_file/GSEB_Boards(class-12)/Gseb_2023/12th Computer 2023 (March).pdf",
    //2022
    'g_comp2' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Computer 2022 (March).pdf",
    'g_comp3' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Computer 2022 (March-Answers).pdf",
    'g_comp4' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Computer 2022 (July).pdf",
    'g_comp5' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th Computer 2022 (July-Answers).pdf",
    //2021
    'g_comp6' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th Computer 2021 (July).pdf",
    //2020
    'g_comp7' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th Computer 2020 (March).pdf",
    //2019
    'g_comp8' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th Computer 2019 (March).pdf",
    //2018
    'g_comp9' : "Boards_file/GSEB_Boards(class-12)/Gseb_2018/12th Computer 2018 (March).pdf",
    

    //English
    //2023
    'g_eng1' : "Boards_file/GSEB_Boards(class-12)/Gseb_2023/12th English 2023 (March).pdf",
    //2022
    'g_eng2' : "Boards_file/GSEB_Boards(class-12)/Gseb_2022/12th English 2022 (March).pdf",
    //2021
    'g_eng3' : "Boards_file/GSEB_Boards(class-12)/Gseb_2021/12th English 2021 (July).pdf",
    //2020
    'g_eng4' : "Boards_file/GSEB_Boards(class-12)/Gseb_2020/12th English 2020 (March).pdf",
    //2019
    'g_eng5' : "Boards_file/GSEB_Boards(class-12)/Gseb_2019/12th English 2019 (March).pdf",
    

    

    //Jee and Neet

    // Mind Map(XI)
    'mi1' : "jee_neet_file/Mind_Maps/XI/Chemical bonding and molecular structure.pdf",
    'mi2' : "jee_neet_file/Mind_Maps/XI/Classification of Elements and periodicity in properties.pdf",
    'mi3' : "jee_neet_file/Mind_Maps/XI/Environmental Chemistry.pdf",
    'mi4' : "jee_neet_file/Mind_Maps/XI/Equilibrium.pdf",
    'mi5' : "jee_neet_file/Mind_Maps/XI/Hydrocarbons new.pdf",
    'mi6' : "jee_neet_file/Mind_Maps/XI/Hydrogen.pdf",
    'mi7' : "jee_neet_file/Mind_Maps/XI/Organic chemistry basics some principle.pdf",
    'mi8' : "jee_neet_file/Mind_Maps/XI/Redox Reaction.pdf",
    'mi9' : "jee_neet_file/Mind_Maps/XI/Some Basic Concepts of Chemistry.pdf",
    'mi10' : "jee_neet_file/Mind_Maps/XI/States of Matter.pdf",
    'mi11' : "jee_neet_file/Mind_Maps/XI/Structure of Atom.pdf",
    'mi12' : "jee_neet_file/Mind_Maps/XI/The P-Block Elements.pdf",
    'mi13' : "jee_neet_file/Mind_Maps/XI/The S - block elements.pdf",
    'mi14' : "jee_neet_file/Mind_Maps/XI/Thermodynamics.pdf",
    
    // Mind Map(XII)
    'mii1' : "jee_neet_file/Mind_Maps/XII/Alcohol, Phenol _ Ethers.pdf",
    'mii2' : "jee_neet_file/Mind_Maps/XII/Aldehyde Ketones and Carboxylic Acid.pdf",
    'mii3' : "jee_neet_file/Mind_Maps/XII/AMINES.pdf",
    'mii4' : "jee_neet_file/Mind_Maps/XII/Biomolecules.pdf",
    'mii5' : "jee_neet_file/Mind_Maps/XII/Chemical Kinetics.pdf",
    'mii6' : "jee_neet_file/Mind_Maps/XII/Chemistry in everyday Life.pdf",
    'mii7' : "jee_neet_file/Mind_Maps/XII/Coordination Compounds.pdf",
    'mii8' : "jee_neet_file/Mind_Maps/XII/D and F elements.pdf",
    'mii9' : "jee_neet_file/Mind_Maps/XII/Electrochemistry.pdf",
    'mii10' : "jee_neet_file/Mind_Maps/XII/General Principles and Processes of Isolation of Elements.pdf",
    'mii11' : "jee_neet_file/Mind_Maps/XII/Haloakanes _ Haloarenes.pdf",
    'mii12' : "jee_neet_file/Mind_Maps/XII/Polymers.pdf",
    'mii13' : "jee_neet_file/Mind_Maps/XII/Solid State.pdf",
    'mii14' : "jee_neet_file/Mind_Maps/XII/Solutions.pdf",
    'mii15' : "jee_neet_file/Mind_Maps/XII/Surface chemistry.pdf",
    'mii16' : "jee_neet_file/Mind_Maps/XII/The P-Block Elements.pdf",

    // Chemistry PYQs
    'chem_pyq1' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Alcohol,Phenol and ether.pdf",
    'chem_pyq2' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Aldehyde,Ketone and Carboxylic acid.pdf",
    'chem_pyq3' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Amines.pdf",
    'chem_pyq4' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Atomic structure.pdf",
    'chem_pyq5' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Basic concepts of chemistry.pdf",
    'chem_pyq6' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/biomolecules.pdf",
    'chem_pyq7' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Chemical bonding.pdf",
    'chem_pyq8' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Chemical Kinetics.pdf",
    'chem_pyq9' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Coordination compounds.pdf",
    'chem_pyq10' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/D-F Block.pdf",
    'chem_pyq11' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Dilute solutions.pdf",
    'chem_pyq12' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Electrochemistry.pdf",
    'chem_pyq13' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Equilibrium.pdf",
    'chem_pyq14' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/General Organic chemistry.pdf",
    'chem_pyq15' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/haloalkanes and Haloarenes.pdf",
    'chem_pyq16' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/hydrocarbon.pdf",
    'chem_pyq17' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/P block(Gp=13,14).pdf",
    'chem_pyq18' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Periodic Table.pdf",
    'chem_pyq19' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/qulititive Analysis.pdf",
    'chem_pyq20' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/Redox reaction.pdf",
    'chem_pyq21' : "jee_neet_file/PYQ(Class-12)/Chemistry PYQs/thermodynamics.pdf",
    
    // Maths PYQs
    'math_pyq1' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/3D Geometry.pdf",
    'math_pyq2' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Application of derivative pyqs.pdf",
    'math_pyq3' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Area under the curve.pdf",
    'math_pyq4' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/binomial theorem.pdf",
    'math_pyq5' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Circle.pdf",
    'math_pyq6' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Complex Number.pdf",
    'math_pyq7' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Conic section.pdf",
    'math_pyq8' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Continuity,differentiability.pdf",
    'math_pyq9' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Definite Integrals.pdf",
    'math_pyq10' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/differential equations.pdf",
    'math_pyq11' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/functions.pdf",
    'math_pyq12' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/integrals.pdf",
    'math_pyq13' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/inverse Trigo function.pdf",
    'math_pyq14' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/limits.pdf",
    'math_pyq15' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Matrices.pdf",
    'math_pyq16' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/permutation and Combination.pdf",
    'math_pyq17' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Probability.pdf",
    'math_pyq18' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/quadratic equation.pdf",
    'math_pyq19' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Relation.pdf",
    'math_pyq20' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Sequence and series.pdf",
    'math_pyq21' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Sets.pdf",
    'math_pyq22' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Statistics.pdf",
    'math_pyq23' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Straight Lines.pdf",
    'math_pyq24' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/trigonometric function.pdf",
    'math_pyq25' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Vector algebra.pdf",
    'math_pyq26' : "jee_neet_file/PYQ(Class-12)/Maths PYQs/Determinants.pdf",

    // Maths PYQs
    'phy_pyq1' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/1D motion.pdf",
    'phy_pyq2' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/2D motion.pdf",
    'phy_pyq3' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Alternating current.pdf",
    'phy_pyq4' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Atoms - Modern Physics.pdf",
    'phy_pyq5' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/current electricity.pdf",
    'phy_pyq6' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Dual Nature of Radiation and Matter.pdf",
    'phy_pyq7' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Elasticity.pdf",
    'phy_pyq8' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/electric charges and fields.pdf",
    'phy_pyq9' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/electromagnetic induction.pdf",
    'phy_pyq10' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/electrostatic potential and capacitance.pdf",
    'phy_pyq11' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/EM Waves.pdf",
    'phy_pyq12' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Experimental Physics.pdf",
    'phy_pyq13' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/fluids.pdf",
    'phy_pyq14' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Gravitation.pdf",
    'phy_pyq15' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Kinetic theory of gases.pdf",
    'phy_pyq16' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Laws of motion.pdf",
    'phy_pyq17' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Magnetism.pdf",
    'phy_pyq18' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Oscillations.pdf",
    'phy_pyq19' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Ray Optics.pdf",
    'phy_pyq20' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/rotation.pdf",
    'phy_pyq21' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Semiconductors and Electronic devices.pdf",
    'phy_pyq22' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Thermal properties of matter.pdf",
    'phy_pyq23' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/thermodynamics.pdf",
    'phy_pyq24' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Units and Measurement.pdf",
    'phy_pyq25' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Waveoptics.pdf",
    'phy_pyq26' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Waves.pdf",
    'phy_pyq27' : "jee_neet_file/PYQ(Class-12)/Physics PYQs/Work power and energy.pdf",

    // Jee Main (Imp-Topics)
    'imp1' : "jee_neet_file/Most repeated subtopics/JEE Mains 2024 Chemistry most important subtopics.pdf",
    'imp2' : "jee_neet_file/Most repeated subtopics/Physics most important subtopics jee mains.pdf",

}


function downloadFile(file_path) {
    // Replace 'your-file-path.txt' with the path to your actual file
    var fileUrl = file_path;
    
    // Create a hidden link element
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); // Extracts the file name from the URL
    document.body.appendChild(link);

    // Trigger the click event to initiate the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}


function downloader(button){
    var button_id = button.id;
    var file_url = notes_dict[button_id];
    // alert("Your Downloading is Started");
    // downloadFile(file_url);

    if(file_url == ""){
        alert("Files will be Added Very Soon.");
    }
    else{
        alert("Your Downloading is Started");
        downloadFile(file_url);
    }
}
