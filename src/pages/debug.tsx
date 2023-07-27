import Link from 'next/link'
import { Layout } from '@/components/meta'
import { ArrowLink } from '@/components/shared'

export default function Debug() {
  return (
    <Layout>
      <div className="container">
        <h1>Debug</h1>

        <div>
          <div>
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>
          <div className="h3">
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>
          <div className="h2">
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>
          <div className="h1">
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>

          <h2>Variant: block</h2>

          <div>
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
          <div className="h3">
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
          <div className="h2">
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
          <div className="h1">
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
        </div>

        <div style={{ background: 'var(--black)', color: 'white' }}>
          <div>
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>
          <div className="h3">
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>
          <div className="h2">
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>
          <div className="h1">
            <ArrowLink href="/">Take Me To Home</ArrowLink>
          </div>

          <h2>Variant: block</h2>

          <div>
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
          <div className="h3">
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
          <div className="h2">
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
          <div className="h1">
            <ArrowLink variant="block" href="/">
              Take Me To Home
            </ArrowLink>
          </div>
        </div>

        <div
          data-cursor="Hola"
          style={{
            maxWidth: 500,
            width: '100%',
            height: 500,
            backgroundColor: 'red'
          }}
          className="d-flex items-center justify-center"
        >
          Move the mouse over here
          <div
            data-cursor="Chau"
            data-cursor-variant="light"
            style={{ width: 200, height: 200, backgroundColor: 'blue' }}
          >
            Chau section
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum atque
          qui beatae voluptatum? Illum quos tempore hic deleniti possimus harum,
          molestiae voluptas laboriosam praesentium aperiam enim, nulla
          reiciendis debitis obcaecati ullam, explicabo dignissimos iure optio.
          Nobis quos dignissimos voluptatum officiis illum est provident
          inventore, distinctio velit cumque reprehenderit culpa libero maiores
          officia alias nihil ipsam ipsa expedita veritatis at suscipit!
          Consequatur, qui nisi quae neque magni eaque praesentium dicta sit
          harum suscipit atque. Similique sapiente architecto perferendis
          impedit placeat saepe dolor ab asperiores in laudantium provident
          ipsam dicta alias quia, laboriosam voluptas ipsa voluptatem a sequi
          iusto veritatis vitae et!
        </p>

        <p>
          <Link href="/contact">Contact</Link>
        </p>

        <h2 style={{ marginTop: '1em', marginBottom: '.5em' }}>
          Wrapping columns
        </h2>

        <div className="grid debug">
          <div className="span-4">span-4</div>
          <div className="span-4">span-4</div>
          <div className="span-4">span-4</div>
          <div className="span-6">span-6</div>
          <div className="span-6">span-6</div>
        </div>

        <h2 style={{ marginTop: '1em', marginBottom: '.5em' }}>Starts</h2>

        <div className="grid debug">
          <div className="span-3 start-4">span-3 start-4</div>
          <div className="span-3 start-9">span-3</div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    return {
      props: {},
      notFound: true
    }
  }

  return { props: {} }
}
