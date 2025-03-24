import { FaStar } from "react-icons/fa6";

export default function Testimonial() {
  const testimonials = [
    {
      title: "Sunt qui esse pariatur duis deserunt mollit",
      content:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
      author: "Cody Fisher",
      position: "Medical Assistant",
    },
    {
      title: "At lectus urna duis convallis tellus",
      content: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          accumsan sit amet nulla facilisi morbi. <br />
          <br /> In nibh mauris cursus mattis. At lectus urna duis convallis
          convallis tellus. Enim blandit volutpat maecenas volutpat.
        </>
      ),
      author: "Jenny Wilson",
      position: "Nursing Assistant",
    },
    {
      title: "Elit aute irure tempor cupidatat incididunt",
      content:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Est aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
      author: "Guy Hawkins",
      position: "President of Sales",
    },
    {
      title: "Sunt qui esse pariatur duis deserunt mollit",
      content:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Est aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
      author: "Cody Fisher",
      position: "Medical Assistant",
    },
    {
      title: "Donec et fringilla neque",
      content:
        "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisl purus cursus sapien, id ultricies nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
      author: "Darlene Robertson",
      position: "Dog Trainer",
    },
    {
      title: "Etiam accumsan porta neque eros",
      content:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
      author: "Dianne Russell",
      position: "Medical Assistant",
    },
  ];

  return (
    <section className="my-40 CustomContainer flex flex-col  gap-16">
      <div className="flex items-end justify-between">
        <div className="flex flex-col items-FaStar t gap-4">
          <h4 className="heading4">Testimonials</h4>
          <h3 className="heading3">
            People all over the <br /> world use banko.
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-end gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
              <FaStar className="h-4 w-4 text-[#5BB5A2]" />
            </div>
            <span className="text-gray-800 dark:text-foreground font-medium">
              Rated <span className="text-[#5BB5A2]">4.8/5</span> from over 1000
              users
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-start gap-8 ">
        {testimonials.map((testimonial, index) => (
          <div
            className="flex flex-col items-start justify-center p-8 bg-white rounded-xl border border-gray-100  shadow-sm hover:shadow-md transition-shadow"
            key={index}
          >
            <div className="flex items-center gap-1 mb-2">
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
              <span>
                <FaStar size={20} className="text-[#5BB5A2]" />
              </span>
            </div>
            <h4 className="text-24px md:text-[28px] mb-4 text-[#1A191E] font-medium">
              {testimonial.title}
            </h4>
            <p className="text-[16px] mb-6 font-medium">
              {testimonial.content}
            </p>
            <div>
              <p className="paragraph">{testimonial.author}</p>
              <p className="text-[14px] text-[#1A191E80] font-medium">
                {testimonial.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
