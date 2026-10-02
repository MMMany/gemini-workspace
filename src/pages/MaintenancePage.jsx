import { Typography, Box, Paper, Button, Stack } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/**
 * 외부 커뮤니티 리디렉션 URL
 * '#' 해시태그로 기본 매핑되어 있으며, 추후 실제 커뮤니티 URL로 교체하여 사용할 수 있습니다.
 */
const COMMUNITY_REDIRECT_URL = '#';

function MaintenancePage() {
  // 일반 좌클릭, 마우스 휠 클릭, Ctrl+클릭 모두 항상 새 탭에서 열리도록 처리
  const handleCommunityRedirect = (event) => {
    // 마우스 좌클릭(0) 및 휠/가운데 버튼 클릭(1) 처리
    if (event.button === 0 || event.button === 1) {
      event.preventDefault();
      window.open(COMMUNITY_REDIRECT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        px: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          maxWidth: 520,
          width: '100%',
          p: { xs: 3, sm: 5 },
          textAlign: 'center',
          borderRadius: 3,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Box
            sx={{
              display: 'inline-flex',
              p: 2,
              borderRadius: '50%',
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
            }}
          >
            <ConstructionIcon sx={{ fontSize: 56 }} />
          </Box>

          <Typography variant="h4" component="h1" fontWeight="bold">
            서비스 점검 안내
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            보다 안정적인 서비스 제공을 위해 현재 시스템 점검을 진행하고 있습니다.
            <br />
            점검 상세 내용 및 관련 소식은 공식 커뮤니티에서 확인해 주시기 바랍니다.
          </Typography>

          <Button
            component="a"
            href={COMMUNITY_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<OpenInNewIcon />}
            onClick={handleCommunityRedirect}
            onAuxClick={handleCommunityRedirect}
            sx={{
              mt: 1,
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            공식 커뮤니티 바로가기
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default MaintenancePage;
