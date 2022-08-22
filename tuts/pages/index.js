import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home page</title>
    </Head>
      <div className="padding">
        
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          impedit vel atque corrupti mollitia iste harum ex autem quam quidem
          sint, esse dolor non perspiciatis vitae voluptates accusantium eveniet
          tempore reprehenderit incidunt repellendus? Id fuga quia, in cumque
          eveniet corrupti ex ullam perferendis dolore quaerat, omnis,
          temporibus at deserunt quas possimus. Vitae repellat porro, modi eius
          laboriosam saepe velit, similique distinctio iusto praesentium facere
          in impedit commodi? Hic mollitia quam repellendus in ipsum? Magnam
          sapiente at non doloribus quo impedit iure sint optio, esse eligendi
          aut reprehenderit accusamus? Voluptatum vel explicabo, laboriosam
          laborum consectetur vero exercitationem obcaecati quibusdam ab eveniet
          magni a facilis, accusamus, voluptatem odit esse ullam sed consequatur
          error recusandae eligendi soluta incidunt! Molestiae cum ex nihil
          facere!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse
          repellendus quas unde! Tenetur ea odit deserunt consequatur? Animi
          illum asperiores, fugiat quod odio voluptatibus? Laborum atque
          pariatur dignissimos sed labore vel deserunt nihil placeat voluptate
          quasi earum saepe repudiandae quis quibusdam, mollitia, simi porro
          tenetur! Architecto omnis, delectus exercitationem tempore in aut
          optio facilis, alias laboriosam aperiam beatae asperiores maxime animi
          vel at velit, ipsam enim laborum quidem blanditiis. Soluta iste, ad
          est, laboriosam, at tempora modi doloremque tenetur voluptate
          dignissimos in aperiam sequi corporis reiciendis recusandae dolorem.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse
          repellendus quas unde! Tenetur ea odit deserunt consequatur? Animi
          illum asperiores, fugiat quod odio voluptatibus? Laborum atque
          pariatur dignissimos sed labore vel deserunt nihil placeat voluptate
          quasi earum saepe repudiandae quis quibusdam, mollitia, similique vero
          esse hic perferendis praesentium. Iusto, aperiam. Corporis sed soluta
          commodi similique sunt saepe optio iusto iste dicta hic voluptatibus
          voluptates sequi ea ipsa fuga modi labore id, nisi possimus, nemo
          porro tenetur! Architecto omnis, delectus exercitationem tempore in
          aut optio facilis, alias laboriosam aperiam beatae asperiores maxime
          animi vel at velit, ipsam enim laborum quidem blanditiis. Soluta iste,
          ad est, laboriosam, at tempora modi doloremque tenetur voluptate
          dignissimos in aperiam sequi corporis reiciendis recusandae dolorem.
        </p>
        <br />
        <br />
        <Link href="/subroute">
          <a>See the listing</a>
        </Link>
      </div>
      <br />
    </>
  );
}
