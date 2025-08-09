

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Styles from "../_components/blog.module.css"
import { blogContent } from "../_components/blogs";

export async function generateMetadata({ params }) {
  const blog = blogContent.find(item => item.slug === params.slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default function BlogPage({ params }) {
  const blog = blogContent.find(item => item.slug === params.blog);

  // if (!blog) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
       <h1 className={Styles["blog-heading"]}>{blog.title}</h1>
       <p className={`${Styles["date-by"]} flex gap-1 mb-10 text-body`}>
        Published on: {blog.date} | By {blog.author}
      </p>

      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
      </div>

      <p className="italic text-sm text-primary mb-4">
        {blog.categories.join(" | ")}
      </p>
<div className={`${Styles["blog-data"]}`}>
      <article className="prose prose-lg max-w-none  text-body">
        {blog.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "heading":
              const Tag = `h${block.level}`;
              return <Tag key={index} className="text-3xl my-5 text-primary">{block.text}</Tag>;
            case "list":
              return (
                <ul key={index}>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </article>
      <p className={Styles["share-post"]}>Share post via:</p>
                    <div className={`${Styles["share-links"]}`}>
                      <div
                        className='flex items-center gap-5'
                      >
                        <Link
                          href="https://twitter.com/serviceconnekt"
                          target="_blank"
                        
                        >
                          <Image height={40} width={40}

                            src="/assets/images/twitter-icon.svg"
                            alt="Twitter Icon"
                            className="w-10 h-10 transition-all duration-200 filter brightness-100 hover:scale-125"
                          />
                        </Link>

                        <Link
                          
                          href="https://www.linkedin.com/company/serviceconnekt"
                          target="_blank"
                        >
                          <Image height={40} width={40}
                            src="/assets/images/linkedin.svg"
                            alt="LinkedIn icon"
                            className="w-10 h-10 transition-all duration-200 filter brightness-100 hover:scale-125"
                          />
                        </Link>
                        <Link
                         
                          href="https://www.instagram.com/serviceconnekt"
                          target="_blank"
                        >
                          <Image height={40} width={40}
                            src="/assets/images/Blogs/instagram.svg"
                            alt="Instagram icon"
                            className="w-10 h-10 transition-all duration-200 filter brightness-100 hover:scale-125"
                          />
                        </Link>
                        <Link
                         
                          href="https://www.facebook.com/serviceconnekt"
                          target="_blank"
                        >
                          <Image height={40} width={40}
                            src="/assets/images/fb-icon.svg"
                            alt="Facebook Icon"
                            className="w-10 h-10 transition-all duration-200 filter brightness-100 hover:scale-125"
                          />
                        </Link>
                      </div>
                      </div>
                      <div
                className={`${Styles["explore-more-blogs"]} mt-[60px]`}
              >

                <h2 className="!text-primary text-[30px] font-medium mb-2">Explore more:</h2>

                <div className="flex gap-2 flex-col md:flex-row">
                  {blogContent?.slice(0, 3)?.map((el, index) => {
                    return (
                      <div key={index} className="flex-1">

                        <Link
                          href={`/blog/${el.slug}`}

                        >
                          <div
                            className={`border p-4  mb-[20px] `}
                          >

                            <div className='filter-grayscale'>
                              <Image
                                height={250}
                                width={250}
                                className="w-full h-[200px] object-cover"
                                src={el.image}
                                alt="blog-image"
                              />
                            </div>


                            <div className='mt-4'>
                              <p className="line-clamp-1">
                                <span className='font-medium text-primary'>
                                  {el.date}
                                </span>
                                <span className='font-medium text-[#2C3441]'>
                                  {" "}
                                  {el.cat}
                                </span>
                              </p>
                              <h3 className='my-4 text-body font-[Quicksand] line-clamp-1 text-2xl font-semibold leading-tight max-w-full overflow-hidden'>
                                {el.title}
                              </h3>
                              <p className='text-body max-w-full line-clamp-3 overflow-hidden text-base'>
                                {el.description}
                              </p>
                            </div>
                          </div>
                        </Link>

                      </div>
                    );
                  })}
                </div>

                <div className={Styles["explore-all-articles"]}>
                  <Link href="/blog">
                    <button>View all articles</button>
                  </Link>
                </div>
              </div>
    </div>
    </div>
  );
}


