import { NextPage } from 'next'
import Head from 'next/head'
import { HistorySearch } from '@/components/HistorySearch/HistorySearch';
import { TagList } from '@/components/TagList';
import { FilterList } from '@/components/FilterList';
import { FlashMessage } from '@/components/FlashMessage';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router'
import Link from 'next/link'

const IndexPage: NextPage = () => {
  const router = useRouter();
  const tagId = router.query.tag_id as (string | undefined);
  const filterId = router.query.filter_id as (string | undefined);

  return (
    <div>
      <Head>
        <title>dw-manager</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1><Link href="/">dw-manager</Link></h1>
      <Grid container>
        <Grid item xs={2}>
          <TagList />
          <FilterList />
        </Grid>
        <Grid item xs={10}><HistorySearch tagId={tagId} filterId={filterId} /></Grid>
      </Grid>
      <FlashMessage />
    </div>
  );
};

export default IndexPage;
