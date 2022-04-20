import PropTypes from 'prop-types';

interface ISectionHeadingProps {
  title: string;
  subtitle: string;
}

function SectionHeading({ title, subtitle }: ISectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-black text-center">{title}</h2>
      <p className="text-xl mt-4 text-center text-gray-500">{subtitle}</p>
    </div>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeading;
