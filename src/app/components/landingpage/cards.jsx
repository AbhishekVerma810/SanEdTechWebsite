import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex flex-col gap-10 items-center lg:items-start justify-between lg:flex-row w-full max-w-[1280px]">
      <div className="flex gap-6 items-start lg:flex-col lg:max-w-[280px] w-full px-4">
        <Image
          width={56}
          height={56}
          className="p-2"
          src="book.svg"
          alt="Book Icon"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Personalized Learning</h1>
          <p className="text-base">
            Our AI-driven platform tailors learning paths to your needs and
            preferences, helping you master new skills at your own pace.
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-start lg:flex-col lg:max-w-[280px] w-full px-4">
        <Image
          width={56}
          height={56}
          className="p-2"
          src="laptop.svg"
          alt="Laptop Icon"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Interactive Courses</h1>
          <p className="text-base">
            Engage with interactive content such as quizzes, video tutorials,
            and assignments, designed to keep you learning actively.
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-start lg:flex-col lg:max-w-[280px] w-full px-4">
        <Image
          width={56}
          height={56}
          className="p-2"
          src="graduation-cap.svg"
          alt="Graduation Cap Icon"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Expert Guidance</h1>
          <p className="text-base">
            Learn from experienced instructors through live sessions, Q&As, and
            personalized feedback to guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
